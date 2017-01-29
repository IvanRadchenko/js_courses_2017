    var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];


    function aclean(arr) {
      let obj = {};

      for (let i = 0; i < arr.length; i++) {
        let str = arr[i].toLowerCase()
          .split("")
          .sort()
          .join("");
        obj[str] = arr[i];
      }

      
      let cleanArray = [];
      
      for (let keys in obj) {
        cleanArray.push(obj[keys]);
      }

      return cleanArray;
    }

    alert(aclean(arr));