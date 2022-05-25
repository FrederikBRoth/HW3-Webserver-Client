let loc = { x: 0, y: 4 }
let dim = { x: 5, y: 5 }
let firstColor = true;

export function move(grid, color, direction) {
    if(firstColor) {
        grid[0][4] = color;
        firstColor = false;
        return grid;
    }
    switch (direction) {
        case "north":
            //If current location is 0 on the y axis, we have to extend the array. The functionality is the same at the x axis
            if (loc.y == 0) {
                for (let i = 0; i < grid.length; i++) {
                    //Unshift array elements at the start of the array. This will essentially extend it "negativaly"
                    grid[i].unshift("empty");
                    //We don't want to decrement loc.y with one since we still want to use our location to figure out where we are on the array
                }
                grid[loc.x][loc.y] = color
                dim.y++
            } else {
                grid[loc.x][loc.y - 1] = color
                loc.y--
            }
            break
        case "west":
            if (loc.x == 0) {
                let rowArray = []
                for (let i = 0; i < dim.y; i++) {
                    rowArray.push("empty");
                }
                grid.unshift(rowArray)
                grid[loc.x][loc.y] = color
            } else {
                for (let i = grid[loc.x].length; i < loc.y; i++) {
                    grid[loc.x - 1].push("empty")
                }
                grid[loc.x - 1][loc.y] = color
                loc.x--

            }

            break
        case "south":
           
            if(dim.y == loc.y + 1) {

          
                for (let i = 0; i < grid.length; i++) {
                    //Unshift array elements at the start of the array. This will essentially extend it "negativaly"
                    grid[i].push("empty");
                    //We don't want to decrement loc.y with one since we still want to use our location to figure out where we are on the array
                }
                grid[loc.x][loc.y + 1] = color

                loc.y++
                dim.y++
            } else {
                grid[loc.x][loc.y + 1] = color
                loc.y++
            }
            break
        case "east":
            if (grid[loc.x + 1] == undefined) {
                let rowArray = []
                for (let i = 0; i < dim.y; i++) {
                    rowArray.push("empty");
                }
                grid.push(rowArray)
                console.log(grid)
            }
            for (let i = grid[loc.x + 1].length; i < loc.y; i++) {
                grid[loc.x + 1].push("empty")
            }
            grid[loc.x + 1][loc.y] = color

            loc.x++
            break
        default:
            console.log("Not a valid direction");
            break
    }


    console.log(loc)
    console.log(dim)
    return grid
}

