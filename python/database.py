import string
import json
import os
# str =["hello world",1,2,3,5,6,7,7]
# print("testing")
# def findvalue(value , list):
#     result= 0
#     for i in range(len(list)):
#         attribute = list[i]
       
#         # print(attribute)
#         if attribute==value:
#             result=1
            
#         else:
#             result =0
#     if result==1:
#         print("yes its present.!")
#     else:
#         print("sorry data not found.!")
# while(True):
    

 


 
script_dir = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(script_dir, "database.json")
print(json_path)
with open(json_path, "r") as file:
    students = json.load(file)
    for student in students:
        for key,value in student.items():
            print(f"                                        {key}|{value}")
            print("-------"*10)
        print("**"*35)
        print("            ")
        print("            ")
        print(" ")
    
