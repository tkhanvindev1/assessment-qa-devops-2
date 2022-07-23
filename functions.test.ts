const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    
    test("check that it returns an array of the same length as the argument sent in", () => {
        const array = [1,2,3,4]
        expect((shuffleArray(array)).length).toEqual(array.length)
        
})
    test("check shuffleArray function if it's shuffle given array", () => {
    const array = [1,2,3,4]
    expect(shuffleArray(array)).not.toBe(array)
})

})