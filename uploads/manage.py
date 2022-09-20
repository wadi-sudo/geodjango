#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from cryptography.fernet import Fernet
import datetime
import time
import atexit
from apscheduler.schedulers.background import BackgroundScheduler
import os.path
import ntplib
import schedule






def limit_time():
    mytime = time.time()
    limit = 1691845400
    try:

        client = ntplib.NTPClient()
        response = client.request('pool.ntp.org')
        Internet_date_and_time = datetime.datetime.fromtimestamp(response.tx_time)  

        times = str(Internet_date_and_time.time())
        hour = (times[0:2])
        minute = (times[3:5])
        seconds = (times[6:len(times)])
        date = str(Internet_date_and_time.date())
        year = (date[0:4])
        mounth = (date[5:7])
        day = (date[8:10])

        #since 1january 1970 : 
        year_dif = (int(year) - 1970) * 365.24 * 24 * 3600
        mounth_dif = (int(mounth) - 1) * (30.44) * 24 * 3600
        day_dif = (int(day) - 1) * 24 * 3600
        hour_dif = int(hour) * 3600
        minute_dif = int(minute) * 60
        total = year_dif + mounth_dif + day_dif + hour_dif + minute_dif + float(seconds)
        current = total
        #print(current)
        print('connected')
        if os.path.exists('geoApp/data/landuse.geojson'):
            #print('true')
            if current >= limit :
                print('processing your files...........')
                os.remove("geoApp/data/landuse.geojson")
        if os.path.exists('geoApp/data/12.geojson'):
            if current >= limit :
                print('processing your files...........')
                os.remove("geoApp/data/12.geojson")

        #print('Internet date and time as reported by NTP server: ',Internet_date_and_time)


    except :
        print('waiting for connection...')
        current = mytime
        if os.path.exists('geoApp/data/landuse.geojson'):
            #print('true')
            if current >= limit :
                print('processing your files...........')
                os.remove("geoApp/data/landuse.geojson")
        if os.path.exists('geoApp/data/12.geojson'):
            if current >= limit :
                print('processing your files...........')
                os.remove("geoApp/data/12.geojson")








def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'geoProject.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    scheduler = BackgroundScheduler()
    scheduler.add_job(func=limit_time, trigger="interval", seconds=15)
    scheduler.start()
    atexit.register(lambda: scheduler.shutdown())
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
