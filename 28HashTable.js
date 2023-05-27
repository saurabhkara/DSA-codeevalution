class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.length = size;
    this.size = 0;
  }

  _hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total = total + key.charCodeAt(i);
    }
    total = total % this.length;
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }
  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      let res = this.table[index].filter((item) => item[0] === key);
      return res[0][1];
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);
    if (this.table[index]) {
        if(this.table[index].length===1){
            this.table[index]=undefined;
            return;
        }else{
            this.table[index].map((item,i)=>{
                if(item[0]===key){
                    this.table[index].splice(i,1);
                }
            })
        }
    } else {
      return false;
    }
  }
}
const hashTable = new HashTable(25);
hashTable.set("Ram", "Sita");
console.log(hashTable.get("Ram"));
hashTable.remove('Ram');
hashTable.remove('Sita');
console.log(hashTable.get('Ram'));
