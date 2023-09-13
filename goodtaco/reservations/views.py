from django.shortcuts import render
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
from .models import Reservation
from .forms import ReservationForm
from django.views.generic import TemplateView

# Create your views here.

class ReservationCreateView(CreateView):
    model = Reservation
    form_class = ReservationForm
    template_name = 'reservations/reservation_form.html'
    success_url = reverse_lazy('reservation_success')

class YourSuccessView(TemplateView):
    template_name = 'reservations/success.html'

