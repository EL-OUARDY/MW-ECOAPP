namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeAdressModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Address_Book", "FullName", c => c.String(nullable: false, maxLength: 20));
            AddColumn("dbo.Address_Book", "State", c => c.String(nullable: false, maxLength: 20));
            DropColumn("dbo.Address_Book", "FirstName");
            DropColumn("dbo.Address_Book", "LastName");
            DropColumn("dbo.Address_Book", "Line3");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Address_Book", "Line3", c => c.String(maxLength: 100));
            AddColumn("dbo.Address_Book", "LastName", c => c.String(nullable: false, maxLength: 20));
            AddColumn("dbo.Address_Book", "FirstName", c => c.String(nullable: false, maxLength: 20));
            DropColumn("dbo.Address_Book", "State");
            DropColumn("dbo.Address_Book", "FullName");
        }
    }
}
