#text filter for level 10 idea
text = "Puzzles have fascinated people for centuries offering a mix of fun challenge and mental stimulation From ancient mazes to modern jigsaws they require logic creativity and patience rewarding solvers with a sense of accomplishment With forms like crosswords Sudoku and brainteasers puzzles cater to different skills sharpening problem-solving abilities and boosting mental sharpness The appeal of puzzles lies in turning confusion into clarity Each piece or clue reveals part of a larger solution offering a balance of challenge and reward Whether solving riddles or assembling jigsaws puzzles are both entertaining and educational improving critical thinking and fine motor skills In both physical and digital forms they continue to inspire discovery and perseverance"
newtext = text.split()
analyse = []
for word in newtext:
    if len(word) == 5:
        analyse.append(word)
print(analyse)
