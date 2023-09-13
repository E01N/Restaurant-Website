from django.urls import path
from .views import ReservationCreateView, YourSuccessView

urlpatterns = [
    path('reserve/', ReservationCreateView.as_view(), name='make_reservation'),
    path('reservation-success/', YourSuccessView.as_view(), name='reservation_success'),
]

