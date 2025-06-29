// enum Direction{
//     Up,
//     Down,
//     Left,
//     Right
// }
enum Direction {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = 'Right'
}
function doSomething(keyPressed : Direction){
    console.log(keyPressed)
}
doSomething(Direction.Up);



// common use case in express server

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })