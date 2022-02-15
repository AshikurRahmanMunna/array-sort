function megaFreinds(friends) {
    if(Array.isArray(friends) == false) {
        return 'please provide an array';
    }
    let mega = friends[0];
    for(const friend of friends) {
        if(friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['Hridoy', 'Sayed', 'Jilfat', 'Abid', 'Nabidul', 'Siyeam', 'Shafat', 'Muga']
const myBigBuddy = megaFreinds(friends);
console.log(myBigBuddy);

// indexOf
if(friends.indexOf('Fox') != 1){
    console.log('fox exists')
}
// includes
if(friends.includes('lion')) {
    console.log('lion exists with includes');
}
// concat
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);