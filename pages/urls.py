from django.urls import path
from pages import views
urlpatterns = [
    path('', views.index_view, name="oneStepLogin" ),
    path('contactus/', views.contact_view, name="contactus"),
    path('login/', views.login_view, name="login"),
    path('signup/', views.signup_view, name="signup")
]
