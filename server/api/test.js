import getRooms from '../scripts/sql.js'

var gleep = getRooms()

export default defineEventHandler((event) => {
    return {
        rooms: gleep
    }
})