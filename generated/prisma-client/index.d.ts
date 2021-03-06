// Code generated by Prisma (prisma@1.34.12). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  lecture: (where?: LectureWhereInput) => Promise<boolean>;
  schedule: (where?: ScheduleWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  lecture: (where: LectureWhereUniqueInput) => LectureNullablePromise;
  lectures: (args?: {
    where?: LectureWhereInput;
    orderBy?: LectureOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Lecture>;
  lecturesConnection: (args?: {
    where?: LectureWhereInput;
    orderBy?: LectureOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => LectureConnectionPromise;
  schedule: (where: ScheduleWhereUniqueInput) => ScheduleNullablePromise;
  schedules: (args?: {
    where?: ScheduleWhereInput;
    orderBy?: ScheduleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Schedule>;
  schedulesConnection: (args?: {
    where?: ScheduleWhereInput;
    orderBy?: ScheduleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ScheduleConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createLecture: (data: LectureCreateInput) => LecturePromise;
  updateLecture: (args: {
    data: LectureUpdateInput;
    where: LectureWhereUniqueInput;
  }) => LecturePromise;
  updateManyLectures: (args: {
    data: LectureUpdateManyMutationInput;
    where?: LectureWhereInput;
  }) => BatchPayloadPromise;
  upsertLecture: (args: {
    where: LectureWhereUniqueInput;
    create: LectureCreateInput;
    update: LectureUpdateInput;
  }) => LecturePromise;
  deleteLecture: (where: LectureWhereUniqueInput) => LecturePromise;
  deleteManyLectures: (where?: LectureWhereInput) => BatchPayloadPromise;
  createSchedule: (data: ScheduleCreateInput) => SchedulePromise;
  updateSchedule: (args: {
    data: ScheduleUpdateInput;
    where: ScheduleWhereUniqueInput;
  }) => SchedulePromise;
  updateManySchedules: (args: {
    data: ScheduleUpdateManyMutationInput;
    where?: ScheduleWhereInput;
  }) => BatchPayloadPromise;
  upsertSchedule: (args: {
    where: ScheduleWhereUniqueInput;
    create: ScheduleCreateInput;
    update: ScheduleUpdateInput;
  }) => SchedulePromise;
  deleteSchedule: (where: ScheduleWhereUniqueInput) => SchedulePromise;
  deleteManySchedules: (where?: ScheduleWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  lecture: (
    where?: LectureSubscriptionWhereInput
  ) => LectureSubscriptionPayloadSubscription;
  schedule: (
    where?: ScheduleSubscriptionWhereInput
  ) => ScheduleSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ScheduleOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "date_ASC"
  | "date_DESC"
  | "todo_ASC"
  | "todo_DESC";

export type LectureOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "date_ASC"
  | "date_DESC"
  | "time_ASC"
  | "time_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "trainer_ASC"
  | "trainer_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type LectureWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ScheduleWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  date?: Maybe<String>;
  date_not?: Maybe<String>;
  date_in?: Maybe<String[] | String>;
  date_not_in?: Maybe<String[] | String>;
  date_lt?: Maybe<String>;
  date_lte?: Maybe<String>;
  date_gt?: Maybe<String>;
  date_gte?: Maybe<String>;
  date_contains?: Maybe<String>;
  date_not_contains?: Maybe<String>;
  date_starts_with?: Maybe<String>;
  date_not_starts_with?: Maybe<String>;
  date_ends_with?: Maybe<String>;
  date_not_ends_with?: Maybe<String>;
  todo?: Maybe<String>;
  todo_not?: Maybe<String>;
  todo_in?: Maybe<String[] | String>;
  todo_not_in?: Maybe<String[] | String>;
  todo_lt?: Maybe<String>;
  todo_lte?: Maybe<String>;
  todo_gt?: Maybe<String>;
  todo_gte?: Maybe<String>;
  todo_contains?: Maybe<String>;
  todo_not_contains?: Maybe<String>;
  todo_starts_with?: Maybe<String>;
  todo_not_starts_with?: Maybe<String>;
  todo_ends_with?: Maybe<String>;
  todo_not_ends_with?: Maybe<String>;
  postedBy?: Maybe<UserWhereInput>;
  AND?: Maybe<ScheduleWhereInput[] | ScheduleWhereInput>;
  OR?: Maybe<ScheduleWhereInput[] | ScheduleWhereInput>;
  NOT?: Maybe<ScheduleWhereInput[] | ScheduleWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  trainer?: Maybe<String>;
  trainer_not?: Maybe<String>;
  trainer_in?: Maybe<String[] | String>;
  trainer_not_in?: Maybe<String[] | String>;
  trainer_lt?: Maybe<String>;
  trainer_lte?: Maybe<String>;
  trainer_gt?: Maybe<String>;
  trainer_gte?: Maybe<String>;
  trainer_contains?: Maybe<String>;
  trainer_not_contains?: Maybe<String>;
  trainer_starts_with?: Maybe<String>;
  trainer_not_starts_with?: Maybe<String>;
  trainer_ends_with?: Maybe<String>;
  trainer_not_ends_with?: Maybe<String>;
  schedule_every?: Maybe<ScheduleWhereInput>;
  schedule_some?: Maybe<ScheduleWhereInput>;
  schedule_none?: Maybe<ScheduleWhereInput>;
  lecture_every?: Maybe<LectureWhereInput>;
  lecture_some?: Maybe<LectureWhereInput>;
  lecture_none?: Maybe<LectureWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface LectureWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  date?: Maybe<String>;
  date_not?: Maybe<String>;
  date_in?: Maybe<String[] | String>;
  date_not_in?: Maybe<String[] | String>;
  date_lt?: Maybe<String>;
  date_lte?: Maybe<String>;
  date_gt?: Maybe<String>;
  date_gte?: Maybe<String>;
  date_contains?: Maybe<String>;
  date_not_contains?: Maybe<String>;
  date_starts_with?: Maybe<String>;
  date_not_starts_with?: Maybe<String>;
  date_ends_with?: Maybe<String>;
  date_not_ends_with?: Maybe<String>;
  time?: Maybe<String>;
  time_not?: Maybe<String>;
  time_in?: Maybe<String[] | String>;
  time_not_in?: Maybe<String[] | String>;
  time_lt?: Maybe<String>;
  time_lte?: Maybe<String>;
  time_gt?: Maybe<String>;
  time_gte?: Maybe<String>;
  time_contains?: Maybe<String>;
  time_not_contains?: Maybe<String>;
  time_starts_with?: Maybe<String>;
  time_not_starts_with?: Maybe<String>;
  time_ends_with?: Maybe<String>;
  time_not_ends_with?: Maybe<String>;
  postedBy?: Maybe<UserWhereInput>;
  AND?: Maybe<LectureWhereInput[] | LectureWhereInput>;
  OR?: Maybe<LectureWhereInput[] | LectureWhereInput>;
  NOT?: Maybe<LectureWhereInput[] | LectureWhereInput>;
}

export type ScheduleWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  name?: Maybe<String>;
  email?: Maybe<String>;
}>;

export interface LectureCreateInput {
  id?: Maybe<ID_Input>;
  date: String;
  time: String;
  postedBy: UserCreateOneWithoutLectureInput;
}

export interface UserCreateOneWithoutLectureInput {
  create?: Maybe<UserCreateWithoutLectureInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutLectureInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  trainer: String;
  schedule?: Maybe<ScheduleCreateManyWithoutPostedByInput>;
}

export interface ScheduleCreateManyWithoutPostedByInput {
  create?: Maybe<
    ScheduleCreateWithoutPostedByInput[] | ScheduleCreateWithoutPostedByInput
  >;
  connect?: Maybe<ScheduleWhereUniqueInput[] | ScheduleWhereUniqueInput>;
}

export interface ScheduleCreateWithoutPostedByInput {
  id?: Maybe<ID_Input>;
  date: String;
  todo: String;
}

export interface LectureUpdateInput {
  date?: Maybe<String>;
  time?: Maybe<String>;
  postedBy?: Maybe<UserUpdateOneRequiredWithoutLectureInput>;
}

export interface UserUpdateOneRequiredWithoutLectureInput {
  create?: Maybe<UserCreateWithoutLectureInput>;
  update?: Maybe<UserUpdateWithoutLectureDataInput>;
  upsert?: Maybe<UserUpsertWithoutLectureInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutLectureDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  trainer?: Maybe<String>;
  schedule?: Maybe<ScheduleUpdateManyWithoutPostedByInput>;
}

export interface ScheduleUpdateManyWithoutPostedByInput {
  create?: Maybe<
    ScheduleCreateWithoutPostedByInput[] | ScheduleCreateWithoutPostedByInput
  >;
  delete?: Maybe<ScheduleWhereUniqueInput[] | ScheduleWhereUniqueInput>;
  connect?: Maybe<ScheduleWhereUniqueInput[] | ScheduleWhereUniqueInput>;
  set?: Maybe<ScheduleWhereUniqueInput[] | ScheduleWhereUniqueInput>;
  disconnect?: Maybe<ScheduleWhereUniqueInput[] | ScheduleWhereUniqueInput>;
  update?: Maybe<
    | ScheduleUpdateWithWhereUniqueWithoutPostedByInput[]
    | ScheduleUpdateWithWhereUniqueWithoutPostedByInput
  >;
  upsert?: Maybe<
    | ScheduleUpsertWithWhereUniqueWithoutPostedByInput[]
    | ScheduleUpsertWithWhereUniqueWithoutPostedByInput
  >;
  deleteMany?: Maybe<ScheduleScalarWhereInput[] | ScheduleScalarWhereInput>;
  updateMany?: Maybe<
    | ScheduleUpdateManyWithWhereNestedInput[]
    | ScheduleUpdateManyWithWhereNestedInput
  >;
}

export interface ScheduleUpdateWithWhereUniqueWithoutPostedByInput {
  where: ScheduleWhereUniqueInput;
  data: ScheduleUpdateWithoutPostedByDataInput;
}

export interface ScheduleUpdateWithoutPostedByDataInput {
  date?: Maybe<String>;
  todo?: Maybe<String>;
}

export interface ScheduleUpsertWithWhereUniqueWithoutPostedByInput {
  where: ScheduleWhereUniqueInput;
  update: ScheduleUpdateWithoutPostedByDataInput;
  create: ScheduleCreateWithoutPostedByInput;
}

export interface ScheduleScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  date?: Maybe<String>;
  date_not?: Maybe<String>;
  date_in?: Maybe<String[] | String>;
  date_not_in?: Maybe<String[] | String>;
  date_lt?: Maybe<String>;
  date_lte?: Maybe<String>;
  date_gt?: Maybe<String>;
  date_gte?: Maybe<String>;
  date_contains?: Maybe<String>;
  date_not_contains?: Maybe<String>;
  date_starts_with?: Maybe<String>;
  date_not_starts_with?: Maybe<String>;
  date_ends_with?: Maybe<String>;
  date_not_ends_with?: Maybe<String>;
  todo?: Maybe<String>;
  todo_not?: Maybe<String>;
  todo_in?: Maybe<String[] | String>;
  todo_not_in?: Maybe<String[] | String>;
  todo_lt?: Maybe<String>;
  todo_lte?: Maybe<String>;
  todo_gt?: Maybe<String>;
  todo_gte?: Maybe<String>;
  todo_contains?: Maybe<String>;
  todo_not_contains?: Maybe<String>;
  todo_starts_with?: Maybe<String>;
  todo_not_starts_with?: Maybe<String>;
  todo_ends_with?: Maybe<String>;
  todo_not_ends_with?: Maybe<String>;
  AND?: Maybe<ScheduleScalarWhereInput[] | ScheduleScalarWhereInput>;
  OR?: Maybe<ScheduleScalarWhereInput[] | ScheduleScalarWhereInput>;
  NOT?: Maybe<ScheduleScalarWhereInput[] | ScheduleScalarWhereInput>;
}

export interface ScheduleUpdateManyWithWhereNestedInput {
  where: ScheduleScalarWhereInput;
  data: ScheduleUpdateManyDataInput;
}

export interface ScheduleUpdateManyDataInput {
  date?: Maybe<String>;
  todo?: Maybe<String>;
}

export interface UserUpsertWithoutLectureInput {
  update: UserUpdateWithoutLectureDataInput;
  create: UserCreateWithoutLectureInput;
}

export interface LectureUpdateManyMutationInput {
  date?: Maybe<String>;
  time?: Maybe<String>;
}

export interface ScheduleCreateInput {
  id?: Maybe<ID_Input>;
  date: String;
  todo: String;
  postedBy: UserCreateOneWithoutScheduleInput;
}

export interface UserCreateOneWithoutScheduleInput {
  create?: Maybe<UserCreateWithoutScheduleInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutScheduleInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  trainer: String;
  lecture?: Maybe<LectureCreateManyWithoutPostedByInput>;
}

export interface LectureCreateManyWithoutPostedByInput {
  create?: Maybe<
    LectureCreateWithoutPostedByInput[] | LectureCreateWithoutPostedByInput
  >;
  connect?: Maybe<LectureWhereUniqueInput[] | LectureWhereUniqueInput>;
}

export interface LectureCreateWithoutPostedByInput {
  id?: Maybe<ID_Input>;
  date: String;
  time: String;
}

export interface ScheduleUpdateInput {
  date?: Maybe<String>;
  todo?: Maybe<String>;
  postedBy?: Maybe<UserUpdateOneRequiredWithoutScheduleInput>;
}

export interface UserUpdateOneRequiredWithoutScheduleInput {
  create?: Maybe<UserCreateWithoutScheduleInput>;
  update?: Maybe<UserUpdateWithoutScheduleDataInput>;
  upsert?: Maybe<UserUpsertWithoutScheduleInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutScheduleDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  trainer?: Maybe<String>;
  lecture?: Maybe<LectureUpdateManyWithoutPostedByInput>;
}

export interface LectureUpdateManyWithoutPostedByInput {
  create?: Maybe<
    LectureCreateWithoutPostedByInput[] | LectureCreateWithoutPostedByInput
  >;
  delete?: Maybe<LectureWhereUniqueInput[] | LectureWhereUniqueInput>;
  connect?: Maybe<LectureWhereUniqueInput[] | LectureWhereUniqueInput>;
  set?: Maybe<LectureWhereUniqueInput[] | LectureWhereUniqueInput>;
  disconnect?: Maybe<LectureWhereUniqueInput[] | LectureWhereUniqueInput>;
  update?: Maybe<
    | LectureUpdateWithWhereUniqueWithoutPostedByInput[]
    | LectureUpdateWithWhereUniqueWithoutPostedByInput
  >;
  upsert?: Maybe<
    | LectureUpsertWithWhereUniqueWithoutPostedByInput[]
    | LectureUpsertWithWhereUniqueWithoutPostedByInput
  >;
  deleteMany?: Maybe<LectureScalarWhereInput[] | LectureScalarWhereInput>;
  updateMany?: Maybe<
    | LectureUpdateManyWithWhereNestedInput[]
    | LectureUpdateManyWithWhereNestedInput
  >;
}

export interface LectureUpdateWithWhereUniqueWithoutPostedByInput {
  where: LectureWhereUniqueInput;
  data: LectureUpdateWithoutPostedByDataInput;
}

export interface LectureUpdateWithoutPostedByDataInput {
  date?: Maybe<String>;
  time?: Maybe<String>;
}

export interface LectureUpsertWithWhereUniqueWithoutPostedByInput {
  where: LectureWhereUniqueInput;
  update: LectureUpdateWithoutPostedByDataInput;
  create: LectureCreateWithoutPostedByInput;
}

export interface LectureScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  date?: Maybe<String>;
  date_not?: Maybe<String>;
  date_in?: Maybe<String[] | String>;
  date_not_in?: Maybe<String[] | String>;
  date_lt?: Maybe<String>;
  date_lte?: Maybe<String>;
  date_gt?: Maybe<String>;
  date_gte?: Maybe<String>;
  date_contains?: Maybe<String>;
  date_not_contains?: Maybe<String>;
  date_starts_with?: Maybe<String>;
  date_not_starts_with?: Maybe<String>;
  date_ends_with?: Maybe<String>;
  date_not_ends_with?: Maybe<String>;
  time?: Maybe<String>;
  time_not?: Maybe<String>;
  time_in?: Maybe<String[] | String>;
  time_not_in?: Maybe<String[] | String>;
  time_lt?: Maybe<String>;
  time_lte?: Maybe<String>;
  time_gt?: Maybe<String>;
  time_gte?: Maybe<String>;
  time_contains?: Maybe<String>;
  time_not_contains?: Maybe<String>;
  time_starts_with?: Maybe<String>;
  time_not_starts_with?: Maybe<String>;
  time_ends_with?: Maybe<String>;
  time_not_ends_with?: Maybe<String>;
  AND?: Maybe<LectureScalarWhereInput[] | LectureScalarWhereInput>;
  OR?: Maybe<LectureScalarWhereInput[] | LectureScalarWhereInput>;
  NOT?: Maybe<LectureScalarWhereInput[] | LectureScalarWhereInput>;
}

export interface LectureUpdateManyWithWhereNestedInput {
  where: LectureScalarWhereInput;
  data: LectureUpdateManyDataInput;
}

export interface LectureUpdateManyDataInput {
  date?: Maybe<String>;
  time?: Maybe<String>;
}

export interface UserUpsertWithoutScheduleInput {
  update: UserUpdateWithoutScheduleDataInput;
  create: UserCreateWithoutScheduleInput;
}

export interface ScheduleUpdateManyMutationInput {
  date?: Maybe<String>;
  todo?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  trainer: String;
  schedule?: Maybe<ScheduleCreateManyWithoutPostedByInput>;
  lecture?: Maybe<LectureCreateManyWithoutPostedByInput>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  trainer?: Maybe<String>;
  schedule?: Maybe<ScheduleUpdateManyWithoutPostedByInput>;
  lecture?: Maybe<LectureUpdateManyWithoutPostedByInput>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  trainer?: Maybe<String>;
}

export interface LectureSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<LectureWhereInput>;
  AND?: Maybe<LectureSubscriptionWhereInput[] | LectureSubscriptionWhereInput>;
  OR?: Maybe<LectureSubscriptionWhereInput[] | LectureSubscriptionWhereInput>;
  NOT?: Maybe<LectureSubscriptionWhereInput[] | LectureSubscriptionWhereInput>;
}

export interface ScheduleSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ScheduleWhereInput>;
  AND?: Maybe<
    ScheduleSubscriptionWhereInput[] | ScheduleSubscriptionWhereInput
  >;
  OR?: Maybe<ScheduleSubscriptionWhereInput[] | ScheduleSubscriptionWhereInput>;
  NOT?: Maybe<
    ScheduleSubscriptionWhereInput[] | ScheduleSubscriptionWhereInput
  >;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Lecture {
  id: ID_Output;
  date: String;
  time: String;
}

export interface LecturePromise extends Promise<Lecture>, Fragmentable {
  id: () => Promise<ID_Output>;
  date: () => Promise<String>;
  time: () => Promise<String>;
  postedBy: <T = UserPromise>() => T;
}

export interface LectureSubscription
  extends Promise<AsyncIterator<Lecture>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  date: () => Promise<AsyncIterator<String>>;
  time: () => Promise<AsyncIterator<String>>;
  postedBy: <T = UserSubscription>() => T;
}

export interface LectureNullablePromise
  extends Promise<Lecture | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  date: () => Promise<String>;
  time: () => Promise<String>;
  postedBy: <T = UserPromise>() => T;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  trainer: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  trainer: () => Promise<String>;
  schedule: <T = FragmentableArray<Schedule>>(args?: {
    where?: ScheduleWhereInput;
    orderBy?: ScheduleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  lecture: <T = FragmentableArray<Lecture>>(args?: {
    where?: LectureWhereInput;
    orderBy?: LectureOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  trainer: () => Promise<AsyncIterator<String>>;
  schedule: <T = Promise<AsyncIterator<ScheduleSubscription>>>(args?: {
    where?: ScheduleWhereInput;
    orderBy?: ScheduleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  lecture: <T = Promise<AsyncIterator<LectureSubscription>>>(args?: {
    where?: LectureWhereInput;
    orderBy?: LectureOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  trainer: () => Promise<String>;
  schedule: <T = FragmentableArray<Schedule>>(args?: {
    where?: ScheduleWhereInput;
    orderBy?: ScheduleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  lecture: <T = FragmentableArray<Lecture>>(args?: {
    where?: LectureWhereInput;
    orderBy?: LectureOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface Schedule {
  id: ID_Output;
  date: String;
  todo: String;
}

export interface SchedulePromise extends Promise<Schedule>, Fragmentable {
  id: () => Promise<ID_Output>;
  date: () => Promise<String>;
  todo: () => Promise<String>;
  postedBy: <T = UserPromise>() => T;
}

export interface ScheduleSubscription
  extends Promise<AsyncIterator<Schedule>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  date: () => Promise<AsyncIterator<String>>;
  todo: () => Promise<AsyncIterator<String>>;
  postedBy: <T = UserSubscription>() => T;
}

export interface ScheduleNullablePromise
  extends Promise<Schedule | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  date: () => Promise<String>;
  todo: () => Promise<String>;
  postedBy: <T = UserPromise>() => T;
}

export interface LectureConnection {
  pageInfo: PageInfo;
  edges: LectureEdge[];
}

export interface LectureConnectionPromise
  extends Promise<LectureConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<LectureEdge>>() => T;
  aggregate: <T = AggregateLecturePromise>() => T;
}

export interface LectureConnectionSubscription
  extends Promise<AsyncIterator<LectureConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<LectureEdgeSubscription>>>() => T;
  aggregate: <T = AggregateLectureSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface LectureEdge {
  node: Lecture;
  cursor: String;
}

export interface LectureEdgePromise extends Promise<LectureEdge>, Fragmentable {
  node: <T = LecturePromise>() => T;
  cursor: () => Promise<String>;
}

export interface LectureEdgeSubscription
  extends Promise<AsyncIterator<LectureEdge>>,
    Fragmentable {
  node: <T = LectureSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateLecture {
  count: Int;
}

export interface AggregateLecturePromise
  extends Promise<AggregateLecture>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateLectureSubscription
  extends Promise<AsyncIterator<AggregateLecture>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ScheduleConnection {
  pageInfo: PageInfo;
  edges: ScheduleEdge[];
}

export interface ScheduleConnectionPromise
  extends Promise<ScheduleConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ScheduleEdge>>() => T;
  aggregate: <T = AggregateSchedulePromise>() => T;
}

export interface ScheduleConnectionSubscription
  extends Promise<AsyncIterator<ScheduleConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ScheduleEdgeSubscription>>>() => T;
  aggregate: <T = AggregateScheduleSubscription>() => T;
}

export interface ScheduleEdge {
  node: Schedule;
  cursor: String;
}

export interface ScheduleEdgePromise
  extends Promise<ScheduleEdge>,
    Fragmentable {
  node: <T = SchedulePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ScheduleEdgeSubscription
  extends Promise<AsyncIterator<ScheduleEdge>>,
    Fragmentable {
  node: <T = ScheduleSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateSchedule {
  count: Int;
}

export interface AggregateSchedulePromise
  extends Promise<AggregateSchedule>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateScheduleSubscription
  extends Promise<AsyncIterator<AggregateSchedule>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface LectureSubscriptionPayload {
  mutation: MutationType;
  node: Lecture;
  updatedFields: String[];
  previousValues: LecturePreviousValues;
}

export interface LectureSubscriptionPayloadPromise
  extends Promise<LectureSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = LecturePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = LecturePreviousValuesPromise>() => T;
}

export interface LectureSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<LectureSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = LectureSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = LecturePreviousValuesSubscription>() => T;
}

export interface LecturePreviousValues {
  id: ID_Output;
  date: String;
  time: String;
}

export interface LecturePreviousValuesPromise
  extends Promise<LecturePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  date: () => Promise<String>;
  time: () => Promise<String>;
}

export interface LecturePreviousValuesSubscription
  extends Promise<AsyncIterator<LecturePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  date: () => Promise<AsyncIterator<String>>;
  time: () => Promise<AsyncIterator<String>>;
}

export interface ScheduleSubscriptionPayload {
  mutation: MutationType;
  node: Schedule;
  updatedFields: String[];
  previousValues: SchedulePreviousValues;
}

export interface ScheduleSubscriptionPayloadPromise
  extends Promise<ScheduleSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = SchedulePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = SchedulePreviousValuesPromise>() => T;
}

export interface ScheduleSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ScheduleSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ScheduleSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = SchedulePreviousValuesSubscription>() => T;
}

export interface SchedulePreviousValues {
  id: ID_Output;
  date: String;
  todo: String;
}

export interface SchedulePreviousValuesPromise
  extends Promise<SchedulePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  date: () => Promise<String>;
  todo: () => Promise<String>;
}

export interface SchedulePreviousValuesSubscription
  extends Promise<AsyncIterator<SchedulePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  date: () => Promise<AsyncIterator<String>>;
  todo: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  trainer: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  trainer: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  trainer: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Schedule",
    embedded: false
  },
  {
    name: "Lecture",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
