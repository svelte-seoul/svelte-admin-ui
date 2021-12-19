import type {Readable, Writable} from 'svelte/store';
import {derived, writable} from 'svelte/store';

export class UserStore {
  private _firstname: Writable<string>;
  private _lastname: Writable<string>;

  constructor() {
    this._firstname = writable('');
    this._lastname = writable('');
  }

  public setName = (first: string, last: string): void => {
    this._firstname.set(first);
    this._lastname.set(last);
  };

  get fullname(): Readable<string> {
    return derived(
      [this._firstname, this._lastname],
      ([$firstName, $lastName]) => {
        return $firstName + ' ' + $lastName;
      },
    );
  }
}

export const userStore = new UserStore();
