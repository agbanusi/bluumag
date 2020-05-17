from django.contrib import admin
from accounts.models import MyUser
# Register your models here.


class MyUserAdmin(admin.ModelAdmin):
    class Meta:
        model = MyUser


admin.site.register(MyUser, MyUserAdmin)
