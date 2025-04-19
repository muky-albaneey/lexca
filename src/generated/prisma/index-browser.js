
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  fname: 'fname',
  lname: 'lname',
  username: 'username',
  email: 'email',
  password: 'password',
  description: 'description',
  link: 'link',
  language: 'language',
  timezone: 'timezone',
  role: 'role',
  socialMediaId: 'socialMediaId',
  paymentDetailsId: 'paymentDetailsId',
  referredById: 'referredById',
  createdAt: 'createdAt'
};

exports.Prisma.ProfileImageScalarFieldEnum = {
  id: 'id',
  url: 'url',
  userId: 'userId'
};

exports.Prisma.PostScalarFieldEnum = {
  id: 'id',
  title: 'title',
  url: 'url',
  content: 'content',
  category: 'category',
  excerpt: 'excerpt',
  tags: 'tags',
  allowComments: 'allowComments',
  featured: 'featured',
  seoOptimized: 'seoOptimized',
  isDraft: 'isDraft',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  authorId: 'authorId'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  postId: 'postId',
  authorId: 'authorId'
};

exports.Prisma.ReplyScalarFieldEnum = {
  id: 'id',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  commentId: 'commentId',
  authorId: 'authorId'
};

exports.Prisma.LikeScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  postId: 'postId',
  userId: 'userId'
};

exports.Prisma.PostImageScalarFieldEnum = {
  id: 'id',
  url: 'url',
  postId: 'postId',
  userId: 'userId'
};

exports.Prisma.SocialMediaScalarFieldEnum = {
  id: 'id',
  website: 'website',
  twitter: 'twitter',
  facebook: 'facebook',
  instagram: 'instagram',
  tiktok: 'tiktok',
  youtube: 'youtube',
  whatsApp: 'whatsApp',
  userId: 'userId'
};

exports.Prisma.PaymentDetailsScalarFieldEnum = {
  id: 'id',
  paymentMethod: 'paymentMethod',
  bankName: 'bankName',
  accountNumber: 'accountNumber',
  routingNumber: 'routingNumber',
  userId: 'userId'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  content: 'content',
  senderId: 'senderId',
  receiverId: 'receiverId',
  createdAt: 'createdAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  price: 'price',
  commission: 'commission',
  category: 'category',
  url: 'url',
  videoUrl: 'videoUrl',
  trackingId: 'trackingId',
  slug: 'slug',
  createdAt: 'createdAt',
  status: 'status',
  ownerId: 'ownerId'
};

exports.Prisma.ProductImageScalarFieldEnum = {
  id: 'id',
  url: 'url',
  productId: 'productId'
};

exports.Prisma.AffiliateLinkScalarFieldEnum = {
  id: 'id',
  url: 'url',
  productId: 'productId',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.EarningScalarFieldEnum = {
  id: 'id',
  amount: 'amount',
  source: 'source',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR'
};

exports.Prisma.ModelName = {
  User: 'User',
  ProfileImage: 'ProfileImage',
  Post: 'Post',
  Comment: 'Comment',
  Reply: 'Reply',
  Like: 'Like',
  PostImage: 'PostImage',
  SocialMedia: 'SocialMedia',
  PaymentDetails: 'PaymentDetails',
  Message: 'Message',
  Product: 'Product',
  ProductImage: 'ProductImage',
  AffiliateLink: 'AffiliateLink',
  Earning: 'Earning'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
