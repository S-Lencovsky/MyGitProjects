name = input("Type in your name here: ")
print("Welcome", name, "to this adventure!")

answer = input(" You are on a dirt road, it has come to an end and you can go left or right, which way would you like to go? ").lower()
if answer == "left":
    answer = input("You come to a river, you can walk around it or swim across? (Type walk or swim): ")

    if answer == "swim":
        print("You swam across and were eaten by a alligator.")
    elif answer == "walk":
        print("You walked for many miles, ran out of water and you lost the game.")
    else:
        print("Not a valid option you lose!")

elif answer == "right":
    answer = input("You come to a bridge, it looks wobbly, do you want to cross it or head back? (cross/back) ")
    
    if answer == "back":
        print("You go back and lose.")
    elif answer == "cross":
        answer = input("You cross the bridge and meet a stranger, do you talk to them (yes/no)? ")

        if answer == "yes":
            print("You talk to the stranger and they give you gold, You win!")
        elif answer == "no":
            print("You ignore the stranger and they get offended, you lose.")
        else:
            print("Not a valid option you lose!")
    else:
        print("Not a valid option you lose!")

    print("Thank you for trying", name)
        
        