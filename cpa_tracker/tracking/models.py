from django.db import models
from django.contrib.auth.models import User

class Offer(models.Model):
    name = models.CharField(max_length=255)
    payout = models.DecimalField(max_digits=10, decimal_places=2)
    redirect_url = models.URLField()

    def __str__(self):
        return self.name

class Affiliate(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class Click(models.Model):
    affiliate = models.ForeignKey(Affiliate, on_delete=models.CASCADE)
    offer = models.ForeignKey(Offer, on_delete=models.CASCADE)
    ip_address = models.GenericIPAddressField()
    user_agent = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.affiliate} - {self.offer} at {self.timestamp}"
