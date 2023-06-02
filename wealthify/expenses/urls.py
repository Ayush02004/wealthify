from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('signup', views.signup, name='signup'),
    path('main', views.main, name='main'),
    path('/gl', views.gl, name='gl'),
    path('/cf', views.cf, name='cf'),
    path('/d', views.d, name='d'),
    #path('profile', views.profile, name='profile'),
]