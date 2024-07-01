import random

user_wins = 0
com_wins = 0

options = ["rock", "paper", "scissors"]


while True:
    user_input = input("Type rock/paper/scissors or Q to quit: ").lower()
    if  user_input == "q":
        break

    if user_input not in ["rock", "paper", "scissors"]:
        continue

    randonm_number = random.randint(0, 2)
    #Rock: 0, Paper: 1, Scissors: 2
    com_pick = options[randonm_number]
    print("Computer picked", com_pick + ".")

    if user_input == "rock" and com_pick == "scissors":
        print("You Won!")
        user_wins +=1
        

    elif user_input == "paper" and com_pick == "rock":
        print("You Won!")
        user_wins +=1
        
    elif user_input == "scissors" and com_pick == "paper":
        print("You Won!")
        user_wins +=1
        
    else:
        print("You lost!")
        com_wins +=1
print("You won", user_wins, "times,")
print("The computer won", com_wins, "times.")
print("Goodbye!")
