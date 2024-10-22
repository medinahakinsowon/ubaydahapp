

import { Client , Account, Databases } from 'appwrite'

const client = new Client()
client.setEndpoint('https://cloud.appwrite.io/v1').setProject('670f7c0b0024957a872a')


export const account = new Account(client)
export const database = new Databases(client)



// 671778520028f84c21b2 db
// 671786ad001edc6e64c1 collection