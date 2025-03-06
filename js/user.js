var User = (function(){
    function createUser (name, marker){
        let score = 0;

        return{
            setName: (newName) => name = newName,
            getName: () => name,
            setMarker: (newMarker) => marker = newMarker,
            getMarker: () => marker,
            win: () => score++,
            getScore: () => score,
            resetScore: ()=>score=0
        };
    }

    return createUser;
})();