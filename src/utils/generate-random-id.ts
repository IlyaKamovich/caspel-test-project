import { nanoid } from 'nanoid';

const generateRandomId = (): string => {
	return nanoid();
};

export { generateRandomId };
