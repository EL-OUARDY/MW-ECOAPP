namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class moveFullNameToUserTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.UserProfiles",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FullName = c.String(nullable: false, maxLength: 30),
                        Gender = c.String(maxLength: 6),
                        Phone = c.String(maxLength: 20),
                        Country = c.String(maxLength: 20),
                        City = c.String(maxLength: 20),
                        User_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.User_Id)
                .Index(t => t.User_Id);
            
            AlterColumn("dbo.Address_Book", "FirstName", c => c.String(nullable: false, maxLength: 20));
            AlterColumn("dbo.Address_Book", "LastName", c => c.String(nullable: false, maxLength: 20));
            AlterColumn("dbo.Address_Book", "Phone", c => c.String(nullable: false, maxLength: 20));
            DropColumn("dbo.AspNetUsers", "FullName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "FullName", c => c.String(nullable: false, maxLength: 50));
            DropForeignKey("dbo.UserProfiles", "User_Id", "dbo.AspNetUsers");
            DropIndex("dbo.UserProfiles", new[] { "User_Id" });
            AlterColumn("dbo.Address_Book", "Phone", c => c.String(nullable: false, maxLength: 50));
            AlterColumn("dbo.Address_Book", "LastName", c => c.String(nullable: false, maxLength: 50));
            AlterColumn("dbo.Address_Book", "FirstName", c => c.String(nullable: false, maxLength: 50));
            DropTable("dbo.UserProfiles");
        }
    }
}
