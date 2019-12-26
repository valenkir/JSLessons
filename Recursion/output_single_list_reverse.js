let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printReverseListLoop(list) {
    let arrList = [];
    let pointer = list;

    while (pointer) {
      arrList.push(pointer.value);
      pointer = pointer.next;
    }

    for (item of arrList.reverse()) {
    	alert(item);
    }
    
  }
