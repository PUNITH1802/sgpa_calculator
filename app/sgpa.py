print("****SGPA CALCULATOR****")
math_internal=int(input("Enter the mathematics marks:\nInternal marks:"))
math_external=int(input("External marks:"))
if math_internal>50 or math_external>50:
    print("Enter vaild mathematics marks:)")
    exit(1)
else:    
    if math_internal==50 and math_external==50:
        math_total=int(((math_internal+math_external)/10))
    
    else:
        math_total=int(((math_internal+math_external)/10))+1
chemistry_internal=int(input("Enter the chemistry marks:\nInternal marks:"))
chemistry_external=int(input("External marks:"))
if chemistry_internal>50 or chemistry_external>50:
    print("Enter vaild chemistry marks:)")
    exit(1)
else:    
    if chemistry_internal==50 and chemistry_external==50:
        chemistry_total=int(((chemistry_internal+chemistry_external)/10))
    
    else:
        chemistry_total=int(((chemistry_internal+chemistry_external)/10))+1
python_internal=int(input("Enter the python marks:\nInternal marks:"))
python_external=int(input("External marks:"))
if python_internal>50 or python_external>50:
    print("Enter vaild python marks:)")
    exit(1)
else:    
    if python_internal==50 and python_external==50:
        python_total=int(((python_internal+python_external)/10))
    
    else:
        python_total=int(((python_internal+python_external)/10))+1    
civil_internal=int(input("Enter the civil marks:\nInternal marks:"))
civil_external=int(input("External marks:"))
if civil_internal>50 or civil_external>50:
    print("Enter vaild civil marks:)")
    exit(1)
else:    
    if civil_internal==50 and civil_external==50:
        civil_total=int(((civil_internal+civil_external)/10))
    
    else:
        civil_total=int(((civil_internal+civil_external)/10))+1    
ind_internal=int(input("Enter the Indian constritution marks:\nInternal marks:"))
ind_external=int(input("External marks:"))
if ind_internal>50 or ind_external>50:
    print("Enter vaild indian constritution marks:)")
    exit(1)
else:    
    if ind_internal==50 and ind_external==50:
        ind_total=int(((ind_internal+ind_external)/10))
    
    else:
        ind_total=int(((ind_internal+ind_external)/10))+1      
com_internal=int(input("Enter the communication english marks:\nInternal marks:"))
com_external=int(input("External marks:"))
if com_internal>50 or com_external>50:
    print("Enter vaild communication english marks:)")
    exit(1)
else:    
    if com_internal==50 and com_external==50:
        com_total=int(((com_internal+com_external)/10))
    
    else:
        com_total=int(((com_internal+com_external)/10))+1       
yoga_internal=int(input("Enter the yoga marks:\nInternal marks:"))
yoga_external=int(input("External marks:"))
if yoga_internal>50 or yoga_external>50:
    print("Enter vaild yoga marks:)")
    exit(1)
else:    
    if yoga_internal==50 and yoga_external==50:
        yoga_total=int(((yoga_internal+yoga_external)/10))
    
    else:
        yoga_total=int(((yoga_internal+yoga_external)/10))+1       
cad_internal=int(input("Enter the CAD marks:\nInternal marks:"))
cad_external=int(input("External marks:"))
if cad_internal>50 or cad_external>50:
    print("Enter vaild CAD marks:)")
    exit(1)
else:    
    if cad_internal==50 and cad_external==50:
        cad_total=int(((cad_internal+cad_external)/10))
    
    else:
        cad_total=int(((cad_internal+cad_external)/10))+1      
sgpa=(math_total*4+chemistry_total*4+python_total*3+civil_total*3+ind_total+com_total+yoga_total+cad_total*3)/20
if sgpa>7.5:
    print(f"Congratulations! Your SGPA is {sgpa}") 
else:
    print(f"Your SGPA is {sgpa}")          