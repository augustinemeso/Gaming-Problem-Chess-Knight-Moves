function knightMoves(x, y) {
    // Possible moves a knight can make
    const moves = [
        [2, 1], [2, -1],
        [-2, 1], [-2, -1],
        [1, 2], [1, -2],
        [-1, 2], [-1, -2]
    ];

    // Store valid moves
    const validMoves = [];

    // Calculate all potential moves
    for (let [dx, dy] of moves) {
        const newX = x + dx;
        const newY = y + dy;

        // Check if the new position is within the bounds of the chessboard
        if (newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8) {
            validMoves.push(`(${newX}, ${newY})`);
        }
    }

    // Return the valid moves as a comma-separated string
    return validMoves.join(', ');
}

// Example usage
console.log(knightMoves(4, 4)); // Output: "(6, 5), (6, 3), (2, 5), (2, 3), (5, 6), (5, 2), (3, 6), (3, 2)"
console.log(knightMoves(1, 1)); // Output: "(3, 2), (2, 3)"
console.log(knightMoves(8, 8)); // Output: "(6, 7), (7, 6)"
