from django.db import models

# Create your models here.
class user(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.EmailField()

    def __str__(self):
        return f"{self.username} - {self.email}"
""" 
# expenditure class contains emi, transport,food, shopping, recharges/bills,others
class DailyExpenditures(models.Models):
    #user = models.ForeignKey(user, on_delete=models.CASCADE)
    Transport = models.IntegerField()
    Food = models.IntegerField()
    Shopping = models.IntegerField()
    Others = models.IntegerField()

    def __str__(self):
        return f"EMI{self.EMI} Transport{self.Transport} Food{self.Food} Shopping{self.Shopping} Bills{self.bills} Others{self.Others}"
    
class MonthlyExpenditures(models.Model):
    EMI = models.IntegerField()
    bills = models.IntegerField()
    rent = models.IntegerField()
    others = models.IntegerField()

    def __str__(self):
        return f"EMI{self.EMI} Bills{self.bills} Rent{self.rent} Others{self.others}"
    
class Income(models.Model):
    income = models.IntegerField()"""