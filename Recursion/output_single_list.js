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

  function printListRec(list) {
      alert(list.value);
      if (list.next == null) {
        alert(list.value);
        return;
      } else {
          printList(list.next);
      }
  }
  
  function printListLoop(list) {
    let arrList = Object.values(list);
    while (true) {
    	alert(arrList[0]);
        if (arrList[1] == null) {
        	return;
        }
        arrList = Object.values(arrList[1]);
    }
  }