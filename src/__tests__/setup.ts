import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';
import 'isomorphic-fetch';
import { beforeEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import mockRouter from 'next-router-mock';

vi.mock('next/router', () => require('next-router-mock'));

const resetRouter = () => {
  mockRouter.pathname = '';
  mockRouter.query = {};
};
beforeEach(async () => {
  cleanup();
  resetRouter();
});
