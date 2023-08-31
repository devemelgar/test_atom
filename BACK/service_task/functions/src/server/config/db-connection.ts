
import { initializeApp } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

export default class DbConnection {
    private static _db: Firestore | undefined = undefined;

    init(): Firestore {
        initializeApp();
        return getFirestore();
    }

    static getConnection(): Firestore {
        if (!this._db) {
            this._db = new DbConnection().init();
        }

        return this._db;
    }
}
