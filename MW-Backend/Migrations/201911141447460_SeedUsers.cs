namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeedUsers : DbMigration
    {
        public override void Up()
        {
            Sql(@"
                INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'221f6748-e76f-4012-b578-846353bcb296', N'Admin@mw.io', 0, N'AN5z+8sfcmZh9P/6vp4u7rpxvXLD+XA/3+TyRHg1w85tx5gAedfDDI0Mg2GScyNY0w==', N'2da5172d-41ee-4105-a134-ef0dc2797b87', NULL, 0, 0, NULL, 0, 0, N'Admin@mw.io')
                INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'b4dcccab-61b9-46c1-a573-5c18e0e893a7', N'user@mw.io', 0, N'AIkyA0jwhq/sseka3I6eNDSakltHimHygDpBSo3D2658qh8coiWerbr5FCGhYcN+pw==', N'533449d4-bbda-4459-bef5-db92497892a0', NULL, 0, 0, NULL, 0, 0, N'user@mw.io')

                INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'b73b4865-27f5-40d5-9882-cfe5ab7e83bc', N'ADMIN')

                INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'221f6748-e76f-4012-b578-846353bcb296', N'b73b4865-27f5-40d5-9882-cfe5ab7e83bc')
               ");
        }
        
        public override void Down()
        {
        }
    }
}
