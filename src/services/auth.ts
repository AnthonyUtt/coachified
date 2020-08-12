import * as Axios from 'axios';
import { randomBytes } from 'crypto';
import { promisify } from 'util';

const getRandomBytes = promisify(randomBytes);

export async function SignUpWithEmailAndPassword(email: string, password: string) {
    //const salt = await getRandomBytes(32);
    //const pHash = await hash(password);
    //console.log(pHash);
}

export async function LogInWithEmailAndPassword(email: string, password: string) {}