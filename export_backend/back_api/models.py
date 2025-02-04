from django.db import models

class Product(models.Model):
    # Basic Fields
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()  # Overview of the product
    stock = models.IntegerField()
    image = models.ImageField(null=True, blank=True)

    # Extended Fields
    tagline = models.CharField(max_length=255, blank=True, null=True)  # Short tagline
    features = models.TextField(blank=True, null=True)  # Key features in text format
    benefits = models.TextField(blank=True, null=True)  # Nutritional and health benefits
    applications = models.TextField(blank=True, null=True)  # Uses and applications
    specifications = models.JSONField(blank=True, null=True)  # Technical specs in JSON format
    packaging_info = models.TextField(blank=True, null=True)  # Packaging details
    certifications = models.TextField(blank=True, null=True)  # Certifications info

    def __str__(self):
        return self.name
