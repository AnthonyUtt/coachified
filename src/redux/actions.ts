//
// Action Types
//

export const AUTH_STATE_CHANGED = 'AUTH_STATE_CHANGED';

//
// Other Constants
//

export interface Session { authUser: any }

//
// Type Interfaces
//

export interface AuthStateChangedAction { type: typeof AUTH_STATE_CHANGED; authUser: any }

//
// Action Creators
//

export function authStateChanged(authUser: any): AuthStateChangedAction {
    return {
        type: AUTH_STATE_CHANGED,
        authUser,
    };
}
