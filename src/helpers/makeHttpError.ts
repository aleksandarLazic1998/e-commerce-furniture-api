interface IProps {
	statusCode: number;
	errorMessage: string;
}

const makeHttpError = ({ statusCode, errorMessage }: IProps) => {
	return {
		headers: { "Content-Type": "application/json" },
		statusCode,
		data: JSON.stringify({ success: false, error: errorMessage }),
	};
};
export default makeHttpError;
