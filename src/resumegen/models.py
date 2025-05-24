# from django.db import models
# from django.conf import settings

# class ResumeUpload(models.Model):
#     user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name='resumes'
#     )
#     title = models.CharField(max_length=200)
#     pdf_file = models.BinaryField()
#     uploaded_at = models.DateTimeField(auto_now_add=True)
#     def __str__(self):
#         return f"{self.user.username}'s Resume uploaded on {self.uploaded_at}"

# class ContactInfo(models.Model):
#     user = models.OneToOneField(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name='contact_info'
#     )
#     full_name = models.CharField(max_length=200)
#     address = models.CharField(max_length=200, blank=True, null=True)
#     phone = models.CharField(max_length=25, blank=True, null=True)
#     email = models.EmailField(max_length=200, blank=True, null=True)
#     website = models.URLField(max_length=200, blank=True, null=True)
#     def __str__(self):
#         return f"Contact Info: {self.full_name}, {self.address}, {self.phone}..."
    
# class Project(models.Model):
#     user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name='projects'
#     )
#     project_title = models.CharField(max_length=200)
#     role = models.CharField(max_length=200, blank=True, null=True)
#     start_date = models.DateField()
#     end_date = models.DateField(blank=True, null=True)
#     tools_used = models.CharField(max_length=200, blank=True, null=True)
#     responsibilities = models.TextField(blank=True, null=True)
#     outcomes = models.TextField(blank=True, null=True)
#     def __str__(self):
#         return f"Projects: {self.project_title}, {self.role}, {self.start_date}..."

# class Experience(models.Model):
#     user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name='experiences'
#     )
#     job_title = models.CharField(max_length=200)
#     company_name = models.CharField(max_length=200)
#     location = models.CharField(max_length=200)
#     start_date = models.DateField()
#     end_date = models.DateField(blank=True, null=True)
#     skills_used = models.CharField(max_length=200, blank=True, null=True)
#     responsibilities = models.TextField(blank=True, null=True)
#     outcomes = models.TextField(blank=True, null=True)
#     def __str__(self):
#         return f"Experience: {self.job_title}, {self.company_name}, {self.location}..."

# class Major(models.Model):
#     type = models.CharField(max_length=10)
#     field_of_study = models.CharField(max_length=200)
#     def __str__(self):
#         return f"Major: {self.type}, {self.field_of_study}"

# class Minor(models.Model):
#     field_of_study = models.CharField(max_length=200)
#     def __str__(self):
#         return f"Minor: {self.field_of_study}"

# class Education(models.Model):
#     user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name='education'
#     )
#     majors = models.ManyToManyField(Major, blank=False, null=False) 
#     minors = models.ManyToManyField(Minor, blank=True, null=True) 
#     institution_name = models.CharField(max_length=200)
#     location = models.CharField(max_length=200)
#     graduation_date = models.DateField(null=True, blank=True)
#     gpa = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True)
#     awards = models.TextField(blank=True, null=True)
#     coursework = models.TextField(blank=True, null=True)
#     final_project_name = models.TextField(blank=True, null=True)
#     def __str__(self):
#         return f"Education: {self.majors}, {self.minors}, {self.institution_name}..."

# class Award(models.Model):
#     user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name='awards'
#     )
#     name = models.CharField(max_length=200)
#     organization = models.CharField(max_length=200)
#     date_received = models.DateField()
#     description = models.TextField(blank=True, null=True)
#     def __str__(self):
#         return f"Award: {self.name}, {self.organization}, {self.date_received}..."

# class Certification(models.Model):
#     user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name='certifications'
#     )
#     name = models.CharField(max_length=200)
#     organization = models.CharField(max_length=200)
#     date_received = models.DateField()
#     expiration_date = models.DateField(blank=True, null=True)
#     certificate_ID = models.CharField(max_length=200)
#     def __str__(self):
#         return f"Certification: {self.name}, {self.organization}, {self.date_received}..."

# class Reference(models.Model):
#     user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name='references'
#     )
#     name = models.CharField(max_length=200)
#     position = models.CharField(max_length=200)
#     company = models.CharField(max_length=200)
#     relationship = models.CharField(max_length=200, blank=True, null=True)
#     email = models.EmailField(max_length=200, blank=True, null=True)
#     phone = models.CharField(max_length=25, blank=True, null=True)
#     def __str__(self):
#         return f"Reference: {self.name}, {self.position}, {self.company}..."
    
# class ResumeVariant(models.Model):
#     user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name='resume_variants'
#     )
#     name = models.CharField(max_length=200)
#     resumeupload = models.ManyToManyField(ContactInfo, blank=True, null=True) 
#     contactinfo = models.ForeignKey(ContactInfo, blank=False) 
#     projects = models.ManyToManyField(Project, blank=True, null=True) 
#     experience = models.ManyToManyField(Experience, blank=True, null=True) 
#     education = models.ManyToManyField(Education, blank=True, null=True) 
#     awards = models.ManyToManyField(Award, blank=True, null=True)
#     certifications = models.ManyToManyField(Certification, blank=True, null=True)
#     references = models.ManyToManyField(Reference, blank=True, null=True) 
#     last_updated = models.DateTimeField(auto_now_add=True)
#     def __str__(self):
#         return f"Resume Variant: {self.resumeupload}, {self.contactinfo}, {self.projects}..."
    