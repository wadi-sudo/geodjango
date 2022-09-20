#from .models import Location
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from .forms import UserRegisterForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required

#from django.shortcuts import render
from json import dumps
import os
import json
from cryptography.fernet import Fernet
from getmac import get_mac_address as gma



def register(request):
    if request.method == "POST":
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Hi {username}, your account was created successfully')
            return redirect('home')
    else:
        form = UserRegisterForm()

    return render(request, 'geoApp/register.html', {'form': form})




def home(request):

	return render(request, 'geoApp/home.html')



@login_required()
def profile(request):
    return render(request, 'geoApp/profile.html')
@login_required()
def index(request):
	
	key = b'p1eHkdjXA1-yZ6tZMIOOmvt2KE6HARJ75iLDVsJ-YYg='
	f = Fernet(key)
	with open('geoApp/data/12.geojson', 'rb') as encrypted_file12:
		encrypted12 = encrypted_file12.read()

	decrypted12 = f.decrypt(encrypted12)
	result12 = decrypted12.decode('utf-8')
	result12 = json.loads(result12)
	json_object12 = json.dumps(result12)
	
	with open('geoApp/data/123_m.geojson', 'rb') as encrypted_file123_m:
		encrypted123_m = encrypted_file123_m.read()
	decrypted123_m = f.decrypt(encrypted123_m)
	result123_m = decrypted123_m.decode('utf-8')
	result123_m = json.loads(result123_m)
	json_object123_m = json.dumps(result123_m)



	with open('geoApp/data/building2.geojson', 'rb') as encrypted_filebuilding2:
		encryptedbuilding2 = encrypted_filebuilding2.read()
	decryptedbuilding2 = f.decrypt(encryptedbuilding2)
	resultbuilding2 = decryptedbuilding2.decode('utf-8')
	resultbuilding2 = json.loads(resultbuilding2)
	json_objectbuilding2 = json.dumps(resultbuilding2)

	with open('geoApp/data/cafe.geojson', 'rb') as encrypted_filecafe:
		encryptedcafe = encrypted_filecafe.read()
	decryptedcafe = f.decrypt(encryptedcafe)
	resultcafe = decryptedcafe.decode('utf-8-sig')
	resultcafe = json.loads(resultcafe)
	json_objectcafe = json.dumps(resultcafe)

	
	with open('geoApp/data/congo.geojson', 'rb') as encrypted_filecongo:
		encryptedcongo = encrypted_filecongo.read()
	decryptedcongo = f.decrypt(encryptedcongo)
	resultcongo = decryptedcongo.decode('utf-8')
	resultcongo = json.loads(resultcongo)
	json_objectcongo = json.dumps(resultcongo)

	with open('geoApp/data/eau.geojson', 'rb') as encrypted_fileeau:
		encryptedeau = encrypted_fileeau.read()
	decryptedeau = f.decrypt(encryptedeau)
	resulteau = decryptedeau.decode('utf-8')
	resulteau = json.loads(resulteau)
	json_objecteau = json.dumps(resulteau)

	with open('geoApp/data/embassy.geojson', 'rb') as encrypted_fileembassy:
		encryptedembassy = encrypted_fileembassy.read()
	decryptedembassy = f.decrypt(encryptedembassy)
	resultembassy = decryptedembassy.decode('utf-8')
	resultembassy = json.loads(resultembassy)
	json_objectembassy = json.dumps(resultembassy)


	
	with open('geoApp/data/fenland.geojson', 'rb') as encrypted_filefenland:
		encryptedfenland = encrypted_filefenland.read()
	decryptedfenland = f.decrypt(encryptedfenland)
	resultfenland = decryptedfenland.decode('utf-8')
	resultfenland = json.loads(resultfenland)
	json_objectfenland = json.dumps(resultfenland)

	with open('geoApp/data/hotel.geojson', 'rb') as encrypted_filehotel:
		encryptedhotel = encrypted_filehotel.read()
	decryptedhotel = f.decrypt(encryptedhotel)
	resulthotel = decryptedhotel.decode('utf-8-sig')
	resulthotel = json.loads(resulthotel)
	json_objecthotel = json.dumps(resulthotel)

	with open('geoApp/data/indonisya.geojson', 'rb') as encrypted_fileindonisya:
		encryptedindonisya = encrypted_fileindonisya.read()
	decryptedindonisya = f.decrypt(encryptedindonisya)
	resultindonisya = decryptedindonisya.decode('utf-8')
	resultindonisya = json.loads(resultindonisya)
	json_objectindonisya = json.dumps(resultindonisya)

	with open('geoApp/data/landuse.geojson', 'rb') as encrypted_filelanduse:
		encryptedlanduse = encrypted_filelanduse.read()
	decryptedlanduse = f.decrypt(encryptedlanduse)
	resultlanduse = decryptedlanduse.decode('utf-8')
	resultlanduse = json.loads(resultlanduse)
	json_objectlanduse = json.dumps(resultlanduse)

	with open('geoApp/data/loisir.geojson', 'rb') as encrypted_fileloisir:
		encryptedloisir = encrypted_fileloisir.read()
	decryptedloisir = f.decrypt(encryptedloisir)
	resultloisir = decryptedloisir.decode('utf-8')
	resultloisir = json.loads(resultloisir)
	json_objectloisir = json.dumps(resultloisir)


	with open('geoApp/data/malta.geojson', 'rb') as encrypted_filemalta:
		encryptedmalta = encrypted_filemalta.read()
	decryptedmalta = f.decrypt(encryptedmalta)
	resultmalta = decryptedmalta.decode('utf-8')
	resultmalta = json.loads(resultmalta)
	json_objectmalta = json.dumps(resultmalta)

	mac=[]
	'''mac0 = gma()
	mac.append(mac0[0:2])
	mac.append(mac0[3:5])
	mac.append(mac0[6:8])
	mac.append(mac0[9:11])
	mac.append(mac0[12:14])
	mac.append(mac0[15:17])
	print(mac)
	print(mac0)'''
	
	with open('geoApp/data/pharmacie.geojson', 'rb') as encrypted_filepharmacie:
		encryptedpharmacie = encrypted_filepharmacie.read()
	decryptedpharmacie = f.decrypt(encryptedpharmacie)
	resultpharmacie = decryptedpharmacie.decode('utf-8-sig')
	resultpharmacie = json.loads(resultpharmacie)
	json_objectpharmacie = json.dumps(resultpharmacie)



	with open('geoApp/data/road_lac3.geojson', 'rb') as encrypted_fileroad_lac3:
		encryptedroad_lac3 = encrypted_fileroad_lac3.read()
	decryptedroad_lac3 = f.decrypt(encryptedroad_lac3)
	resultroad_lac3 = decryptedroad_lac3.decode('utf-8')
	resultroad_lac3 = json.loads(resultroad_lac3)
	json_objectroad_lac3 = json.dumps(resultroad_lac3)

	with open('geoApp/data/suede.geojson', 'rb') as encrypted_filesuede:
		encryptedsuede = encrypted_filesuede.read()
	decryptedsuede = f.decrypt(encryptedsuede)
	resultsuede = decryptedsuede.decode('utf-8')
	resultsuede = json.loads(resultsuede)
	json_objectsuede = json.dumps(resultsuede)

	with open('geoApp/data/venesuela.geojson', 'rb') as encrypted_filevenesuela:
		encryptedvenesuela = encrypted_filevenesuela.read()
	decryptedvenesuela = f.decrypt(encryptedvenesuela)
	resultvenesuela = decryptedvenesuela.decode('utf-8')
	resultvenesuela = json.loads(resultvenesuela)
	json_objectvenesuela = json.dumps(resultvenesuela)

	with open('geoApp/data/z_verte.geojson', 'rb') as encrypted_filez_verte:
		encryptedz_verte = encrypted_filez_verte.read()
	decryptedz_verte = f.decrypt(encryptedz_verte)
	resultz_verte = decryptedz_verte.decode('utf-8')
	resultz_verte = json.loads(resultz_verte)
	json_objectz_verte = json.dumps(resultz_verte)

	with open('geoApp/data/bank.geojson', 'rb') as encrypted_filebank:
		encryptedbank = encrypted_filebank.read()
	decryptedbank = f.decrypt(encryptedbank)
	resultbank = decryptedbank.decode('utf-8-sig')
	resultbank = json.loads(resultbank)
	json_objectbank = json.dumps(resultbank)

	with open('geoApp/data/lac2.geojson', 'rb') as encrypted_filelac:
		encryptedlac = encrypted_filelac.read()
	decryptedlac = f.decrypt(encryptedlac)
	resultlac = decryptedlac.decode('utf-8')
	resultlac = json.loads(resultlac)
	json_objectlac = json.dumps(resultlac)

	return render(request, 'geoApp/index.html',{'data0': mac, 'data1': json_object12, 'data2': json_object123_m, 'data3': json_objectbank, 'data4': json_objectbuilding2, 'data5': json_objectcafe, 'data6': json_objectcongo, 'data7': json_objecteau, 'data8': json_objectembassy, 'data10': json_objectfenland, 'data11': json_objecthotel, 'data12': json_objectindonisya, 'data13': json_objectlanduse, 'data14': json_objectloisir, 'data15': json_objectmalta, 'data16': json_objectpharmacie, 'data18': json_objectroad_lac3, 'data19': json_objectsuede, 'data20': json_objectvenesuela, 'data21': json_objectz_verte, 'data22': json_objectlac})
	#return render(request, 'geoApp/index.html')




