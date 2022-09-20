from django.contrib import admin

from leaflet.admin import LeafletGeoAdmin



'''from .models import TunAdm1

from .models import TunAdm2'''

'''from .models import AuthGroup

from .models import AuthGroupPermissions

from .models import AuthPermission

from .models import AuthUser

from .models import AuthUserGroups

from .models import AuthUserUserPermissions

from .models import DjangoAdminLog

from .models import DjangoContentType

from .models import DjangoMigrations

from .models import DjangoSession'''

#from .models import Poi

#from .models import Road

from .models import Fastfood

from .models import Restaurant

from .models import Cafe

from .models import Food



'''admin.site.register(TunAdm1, LeafletGeoAdmin)
admin.site.register(TunAdm2, LeafletGeoAdmin)
admin.site.register(Poi, LeafletGeoAdmin)
admin.site.register(Road, LeafletGeoAdmin)'''
admin.site.register(Fastfood, LeafletGeoAdmin)
admin.site.register(Restaurant, LeafletGeoAdmin)
admin.site.register(Cafe, LeafletGeoAdmin)
admin.site.register(Food, LeafletGeoAdmin)

'''admin.site.register(AuthGroup, LeafletGeoAdmin)
admin.site.register(AuthGroupPermissions, LeafletGeoAdmin)
admin.site.register(AuthPermission, LeafletGeoAdmin)
admin.site.register(AuthUser, LeafletGeoAdmin)
admin.site.register(AuthUserGroups, LeafletGeoAdmin)
admin.site.register(AuthUserUserPermissions, LeafletGeoAdmin)
admin.site.register(DjangoAdminLog, LeafletGeoAdmin)
admin.site.register(DjangoContentType, LeafletGeoAdmin)
admin.site.register(DjangoMigrations, LeafletGeoAdmin)
admin.site.register(DjangoSession, LeafletGeoAdmin)'''
