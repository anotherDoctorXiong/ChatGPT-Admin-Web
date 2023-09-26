export interface requestCodeDto {
  phone: string;
}

export interface loginByCodeDto extends requestCodeDto {
  captcha: string;
}

export interface byPasswordDto extends requestCodeDto {
  password: string;
}
