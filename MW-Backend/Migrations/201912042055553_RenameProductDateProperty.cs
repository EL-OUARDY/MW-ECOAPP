namespace MW_Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RenameProductDateProperty : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "Last_Modification", c => c.DateTime());
            DropColumn("dbo.Products", "Date_Added");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "Date_Added", c => c.DateTime());
            DropColumn("dbo.Products", "Last_Modification");
        }
    }
}
