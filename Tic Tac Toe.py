import random

# Function to print the Tic-Tac-Toe board
def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 9)

# Function to check if a player has won
def check_win(board, player):
    for row in board:
        if all(cell == player for cell in row):
            return True

    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True

    if all(board[i][i] == player for i in range(3)) or \
       all(board[i][2-i] == player for i in range(3)):
        return True

    return False

# Function to check if the board is full
def is_board_full(board):
    for row in board:
        for cell in row:
            if cell == ' ':
                return False
    return True

# Function for the computer's move
def computer_move(board):
    # Check if computer can win in the next move
    for i in range(3):
        for j in range(3):
            if board[i][j] == ' ':
                board[i][j] = 'O'
                if check_win(board, 'O'):
                    return 
                board[i][j] = ' '

    # Check if player can win in the next move and block
    for i in range(3):
        for j in range(3):
            if board[i][j] == ' ':
                board[i][j] = 'X'
                if check_win(board, 'X'):
                    board[i][j] = 'O'
                    return
                board[i][j] = ' '

    # Otherwise, make a random move
    while True:
        row = random.randint(0, 2)
        col = random.randint(0, 2)
        if board[row][col] == ' ':
            board[row][col] = 'O'
            break

# Main function to run the game
def main():
    board = [[' ' for _ in range(3)] for _ in range(3)]
    print("Welcome to Tic Tac Toe!")
    print("Player = 'X', Computer = 'O'")
    print_board(board)

    while True:
        # Player's move
        while True:
            try:
                row, col = map(int, input("Enter row and column (0-2) separated by space: ").split())
                if board[row][col] != ' ':
                    print("That cell is already occupied. Try again.")
                else:
                    board[row][col] = 'X'
                    break
            except ValueError:
                print("Invalid input. Please enter two integers.")
            except IndexError:
                print("Row and column should be between 0 and 2.")

        print_board(board)

        if check_win(board, 'X'):
            print("Congratulations! You win!")
            break

        if is_board_full(board):
            print("It's a draw!")
            break

        # Computer's move
        print("Computer's move:")
        computer_move(board)
        print_board(board)

        if check_win(board, 'O'):
            print("Computer wins! Better luck next time.")
            break

        if is_board_full(board):
            print("It's a draw!")
            break

if __name__ == "__main__":
    main()
