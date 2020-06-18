function towerOfHanoi(diskNum, begin, movement, lastPosition) {
    if (diskNum === 0) {
        return 
    }

    towerOfHanoi(diskNum - 1, begin, movement, lastPosition)
    towerOfHanoi(diskNum - 1, lastPosition, begin, movement)
    console.log(`Moving ${diskNum} from ${begin} to ${lastPosition}`)
}

towerOfHanoi(3, 'A', 'B', 'C') // 7 recursions
towerOfHanoi(4, 'A', 'B', 'C') // 15 recursions
towerOfHanoi(5, 'A', 'B', 'C') // 31 recursions

// Time sequence is exponential O(2^n), scales expontentially based on input? 