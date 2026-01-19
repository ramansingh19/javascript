function throttling(fn , delay){
  let lastcall = 0;

  return function(...args){
      const now = Date.now();
      if (now - lastcall < delay) {
        return
      }
      lastcall = now;
      return fn(...args)
  }
}

let sendmesggae = (message) => {
    console.log(`sending message` , message);
    
}

let sendmessagewithSlowDown = throttling(sendmesggae , 2000)

sendmessagewithSlowDown('Hi ')
sendmessagewithSlowDown('Hi kay hal')
sendmessagewithSlowDown('Hi ji')
sendmessagewithSlowDown('Hi medam')
sendmessagewithSlowDown('Hi laure')
sendmessagewithSlowDown('Hi laure')
sendmessagewithSlowDown('Hi laure')
sendmessagewithSlowDown('Hi laure')
sendmessagewithSlowDown('Hi laure')
sendmessagewithSlowDown('Hi laure')
sendmessagewithSlowDown('Hi laure')
sendmessagewithSlowDown('Hi laure')
sendmessagewithSlowDown('Hi laure')
sendmessagewithSlowDown('Hi laure')
sendmessagewithSlowDown('Hi laure')
sendmessagewithSlowDown('Hi laure')
sendmessagewithSlowDown('Hi laure')
sendmessagewithSlowDown('Hi laure')