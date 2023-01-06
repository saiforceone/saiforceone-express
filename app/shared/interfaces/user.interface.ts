export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  initials?: string;
  accountType: string;
  lastLoginDate?: Date;
}
