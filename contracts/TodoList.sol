pragma solidity ^0.5.0;

contract TodoList {
    uint public todoCount = 0;

    struct Todo {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Todo) public todos;

    constructor() public {
        createTodo("Checkout solidity");
        createTodo("Checkout Rust");
    }


    function createTodo(string memory _content) public {
        todoCount++;
        todos[todoCount] = Todo(todoCount,_content,false);
    }
}