const initialMemoryUsage = process.memoryUsage().heapused;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0; i <= 10000; i++) {
    // proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapused;
console.log(`hai ${yourName}`);
console.log(`Mode Environment: ${environment}`);
console.log(`penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);