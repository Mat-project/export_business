# Generated by Django 5.1.4 on 2024-12-29 09:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("back_api", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to=""),
        ),
    ]
