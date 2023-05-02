class MatrixCalculator {
	constructor() {
		this.matrixA = [];
		this.matrixB = [];

		for (let i = 0; i < 3; i++) {
			this.matrixA[i] = [];
			this.matrixB[i] = [];
		}

		this.AxDimension = 3;
		this.AyDimension = 3;
		this.BxDimension = 3;
		this.ByDimension = 3;
	}

	calculateMatrix() {
		this.rebuildMatrix();

		let rank = this.AxDimension;
		let row = this.AyDimension;
		let mat = this.matrixA;

		for (row = 0; row < rank; row++) {
			if (mat[row][row]) {
				for (let col = 0; col < this.AyDimension; col++) {
					if (col != row) {
						let multiply = Math.round((mat[col][row] / mat[row][row]) * 100) / 100;
						for (let i = 0; i < rank; i++) mat[col][i] -= multiply * mat[row][i];
					}
				}
			} else {
				let reduce = true;
				for (let i = row + 1; i < this.AyDimension; i++) {
					if (mat[i][row]) {
						let aux = mat[row];
						mat[row] = math[i];
						math[i] = aux;
						reduce = false;
						break;
					}
				}

				if (reduce) {
					rank--;
					for (let i = 0; i < this.AyDimension; i++) {
						mat[i][row] = mat[i][rank];
					}
				}
				row--;
			}
		}
		this.printOnConsole(`Matrix rank is: ${rank}`);
	}

	inversMatrix() {
		this.calculateDeterminant();
		if (this.determinantA == null) return;
		if (this.determinantA == 0) {
			this.printOnConsole('Matrix is non-invertable.');
			return;
		}

		let adjoint = [];
		let result = [];
		let aux = [];

		for (let i = 0; i < this.AyDimension; i++) {
			for (let j = 0; j < this.AxDimension; j++) {
				if (this.AxDimension == 1) adjoint[i][j] = 1 + '/' + this.matrixA[i][j];
				if (this.AxDimension == 2) adjoint[j][i] = (-1) ** (i + 1 + j) * this.matrixA[i][j];
				if (this.AxDimension == 3) {
					let count1 = 0;
					let count2 = 0;

					for (let k = 0; k < 3; k++) {
						for (let l = 0; l < 3; l++) {
							if (l != j && k != i) {
								aux[count1][count2] = this.matrixA[k][l];
								count2++;
							}
						}
						count2 = 0;
						if (k != i) count1++;
					}
					adjoint[i][j] = (-1) ** (i + 1 + j + 1) * (aux[0][0] * aux[1][1] - aux[0][1] * aux[1][0]);
				}
			}
		}

		// transposeing it
		for (let i = 0; i < this.AxDimension; i++) {
			for (let j = 0; j < this.AyDimension; j++) {
				result[i][j] = adjoint[j][i];
			}
		}
		if (this.AxDimension == 2) {
			let temp = result[0][0];
			result[0][0] = result[1][1];
			result[1][1] = temp;
		}

		// we divide by the determinant
		if (this.AxDimension != 1) {
			for (let i = 0; i < this.AyDimension; i++) {
				for (let j = 0; j < this.AxDimension; j++) {
					Math.round((result[i][j] / this.determinantA) * 100) / 100;
				}
			}
		}

		const string = 'Invers Matrix:\r';
		for (let i = 0; i < this.AyDimension; i++) {
			for (let j = 0; j < this.AxDimension; j++) {
				string = string + '\t' + result[i][j];
			}
			string = string + '\r';
		}
		this.printOnConsole(string);
	}

	transposeMatrix() {
		this.rebuildMatrix();
		const string = 'Transpose matrix:\r';
		for (let i = 0; i < this.AxDimension; i++) {
			for (let j = 0; j < this.AyDimension; j++) {
				string = string + '\t' + this.matrixA[j][i];
			}
			string = string + '\r';
		}
		this.printOnConsole(string);
	}

	subtractMatrix() {
		this.rebuildMatrix();
		if (this.AxDimension != this.AyDimension) {
			this.printOnConsole('Matrix have different dimension.');
			return;
		}
		let result = [];
		for (let i = 0; i < 3; i++) result[i] = [];

		for (let i = 0; i < this.AyDimension; i++) {
			for (let j = 0; j < this.AxDimension; j++) {
				result[i][j] = Math.round((parseFloat(this.matrixA[i][j]) - parseFloat(this.matrixB[i][j])) * 100) / 100;
			}
		}

		let string = 'Subtraction result:\r';
		for (let i = 0; i < this.AyDimension; i++) {
			for (let j = 0; j < this.AxDimension; j++) {
				string = string + '\t' + result[i][j];
			}
			string = string + '\r';
		}
		this.printOnConsole(string);
	}
}
