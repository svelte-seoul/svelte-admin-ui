import type {Admin} from '../types';
import {writable} from 'svelte/store';

export const admin = writable<Admin | null>(null);