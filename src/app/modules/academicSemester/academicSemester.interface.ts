// 28 Oct, 24
// 12-4 Create Academic Semester Interface

// ? USED UNION TYPE

export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

// 12-5 Create Academic Semester Model
export type TAcademicSemesterName = 'Autumn' | 'Summer' | 'Fall';
export type TAcademicSemesterCode = '01' | '02' | '03';

export type TAcademicSemester = {
  name: TAcademicSemesterName; // 12-5 Create Academic Semester Model
  // name: 'Autumn' | 'Summer' | 'Fall';
  code: TAcademicSemesterCode; // 12-5 Create Academic Semester Model
  // code: '01' | '02' | '03';
  year: Date;
  startMonth: TMonths;
  endMonth: TMonths;
};
