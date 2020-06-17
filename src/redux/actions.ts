import { User } from 'firebase';

//
// Action Types
//

export const AUTH_STATE_CHANGED = 'AUTH_STATE_CHANGED';

//
// Other Constants
//

export interface Session { authUser: User | null }

//
// Type Interfaces
//

export interface AuthStateChangedAction { type: typeof AUTH_STATE_CHANGED; authUser: User | null }

//
// Action Creators
//

export function authStateChanged(authUser: User): AuthStateChangedAction {
    return {
        type: AUTH_STATE_CHANGED,
        authUser,
    };
}
