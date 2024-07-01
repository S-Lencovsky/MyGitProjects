print("Welcome to my computer quiz!")

playing = input("Do you want to play? ")

if playing.lower() != "yes":
    quit()

print("Okay! Lets play! :)")
score = 0

answer= input("What does the CPU stand for? ")
if answer.lower() == "central processing unit":
    print("Correct!")
    score+=1
else:
    print("Sorry incorrect answer! :(")


answer= input("What does GPU stand for? ")
if answer.lower() == "graphic processing unit":
    print("Correct!")
    score+=1
else:
    print("Sorry incorrect answer! :(")

answer= input("What does RAM stand for? ")
if answer.lower() == "random access memory":
    print("Correct!")
    score+=1
else:
    print("Sorry incorrect answer! :(")

answer= input("What does PSU stand for? ")
if answer.lower() == "power supply":
    print("Correct!")
    score+=1
else:
    print("Sorry incorrect answer! :(")

print("You got " + str(score) + " questions correct!")
print("You got " + str((score/4)*100) + "%.")




